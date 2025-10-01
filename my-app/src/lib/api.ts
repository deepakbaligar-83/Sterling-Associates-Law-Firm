const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';

export interface StrapiImage {
  id: number;
  url: string;
  alternativeText?: string;
  formats?: {
    thumbnail?: { url: string };
    small?: { url: string };
    medium?: { url: string };
    large?: { url: string };
  };
}

export interface Service {
  id: number;
  title: string;
  desc: string;
  link: string;
  order?: number;
  image: StrapiImage;
}

export interface TeamMember {
  id: number;
  name?: string;
  role?: string;
  order?: number;
  image: StrapiImage;
}

export interface Attorney {
  id: number;
  name: string;
  title: string;
  expertise: string;
  bio: string;
  education: string;
  barAdmissions: string;
  email: string;
  image?: StrapiImage;
  order?: number;
}

export interface HeroImage {
  id: number;
  image: {
    data: {
      id: number;
      attributes: StrapiImage;
    };
  };
  altText?: string;
}

export async function fetchServices(): Promise<Service[]> {
  try {
    const response = await fetch(`${STRAPI_URL}/api/services?populate=*&sort=order:asc`, {
      cache: 'no-store',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    if (!response.ok) {
      return [];
    }
    
    const data = await response.json();
    
    const services = data.data.map((item: any) => ({
      id: item.id,
      title: item.title,
      desc: item.desc,
      link: item.link,
      order: item.order,
      image: item.image,
    }));
    
    return services;
  } catch (error) {
    console.error('Error fetching services:', error);
    return [];
  }
}

export async function fetchHeroImage(): Promise<string | null> {
  try {
    const response = await fetch(`${STRAPI_URL}/api/hero-image?populate=*`, {
      cache: 'no-store',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    if (!response.ok) {
      return null;
    }
    
    const data = await response.json();
    
    // Try different possible structures for Strapi v5 single type
    let imageUrl = null;
    
    // Structure 1: data.image.url (direct)
    if (data.image?.url) {
      imageUrl = data.image.url;
    }
    // Structure 2: data.data.attributes.image.data.attributes.url (nested)
    else if (data.data?.attributes?.image?.data?.attributes?.url) {
      imageUrl = data.data.attributes.image.data.attributes.url;
    }
    // Structure 3: data.data.image.url
    else if (data.data?.image?.url) {
      imageUrl = data.data.image.url;
    }
    
    if (imageUrl) {
      const fullUrl = imageUrl.startsWith('http') ? imageUrl : `${STRAPI_URL}${imageUrl}`;
      return fullUrl;
    }
    
    return null;
  } catch (error) {
    console.error('Error fetching hero image:', error);
    return null;
  }
}

export async function fetchTeamMembers(): Promise<TeamMember[]> {
  try {
    const response = await fetch(`${STRAPI_URL}/api/team-members?populate=*&sort=order:asc`, {
      cache: 'no-store',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    if (!response.ok) {
      return [];
    }
    
    const data = await response.json();
    
    const teamMembers = data.data.map((item: any) => ({
      id: item.id,
      name: item.name,
      role: item.role,
      order: item.order,
      image: item.image,
    }));
    
    return teamMembers;
  } catch (error) {
    console.error('Error fetching team members:', error);
    return [];
  }
}

export async function fetchAttorneys(): Promise<Attorney[]> {
  try {
    const response = await fetch(`${STRAPI_URL}/api/attorneys?populate=*&sort=order:asc`, {
      cache: 'no-store',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    if (!response.ok) {
      return [];
    }
    
    const data = await response.json();
    
    const attorneys = data.data.map((item: any) => ({
      id: item.id,
      name: item.name,
      title: item.title,
      expertise: item.expertise,
      bio: item.bio,
      education: item.education,
      barAdmissions: item.barAdmissions,
      email: item.email,
      image: item.image,
      order: item.order,
    }));
    
    return attorneys;
  } catch (error) {
    console.error('Error fetching attorneys:', error);
    return [];
  }
}

export async function submitTestimonial(name: string, review: string): Promise<{ success: boolean; message: string }> {
  try {
    const response = await fetch(`${STRAPI_URL}/api/testimonials`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        data: {
          name,
          review,
          rating: 5,
          approved: false,
        },
      }),
    });
    
    if (!response.ok) {
      return {
        success: false,
        message: 'Failed to submit review. Please try again later.',
      };
    }
    
    await response.json();
    
    return {
      success: true,
      message: 'Thank you for your review! It will be published after approval.',
    };
  } catch (error) {
    console.error('Error submitting testimonial:', error);
    return {
      success: false,
      message: 'An error occurred. Please try again later.',
    };
  }
}

export async function submitJobApplication(
  name: string,
  email: string,
  position: string,
  resume: File,
  coverLetter?: string
): Promise<{ success: boolean; message: string }> {
  try {
    // First, upload the resume file
    const formData = new FormData();
    formData.append('files', resume);
    
    const uploadResponse = await fetch(`${STRAPI_URL}/api/upload`, {
      method: 'POST',
      body: formData,
    });
    
    if (!uploadResponse.ok) {
      if (uploadResponse.status === 403) {
        return {
          success: false,
          message: 'Upload permission denied. Please contact administrator.',
        };
      }
      
      return {
        success: false,
        message: 'Failed to upload resume. Please try again.',
      };
    }
    
    const uploadedFiles = await uploadResponse.json();
    const resumeId = uploadedFiles[0]?.id;
    
    // Then, create the job application with the uploaded resume
    const applicationData = {
      data: {
        name,
        email,
        position,
        resume: resumeId,
        coverLetter: coverLetter || '',
        status: 'pending',
      },
    };
    
    const response = await fetch(`${STRAPI_URL}/api/job-applications`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(applicationData),
    });
    
    if (!response.ok) {
      return {
        success: false,
        message: 'Failed to submit application. Please try again later.',
      };
    }
    
    await response.json();
    
    return {
      success: true,
      message: 'Thank you for your application! We\'ll be in touch soon.',
    };
  } catch (error) {
    console.error('Error submitting job application:', error);
    return {
      success: false,
      message: 'An error occurred. Please try again later.',
    };
  }
}

export async function submitContactForm(
  name: string,
  email: string,
  phone: string,
  legalArea: string,
  message: string
): Promise<{ success: boolean; message: string }> {
  try {
    const response = await fetch(`${STRAPI_URL}/api/contact-submissions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        data: {
          name,
          email,
          phone: phone || '',
          legalArea,
          message,
          status: 'new',
        },
      }),
    });
    
    if (!response.ok) {
      return {
        success: false,
        message: 'Failed to send message. Please try again later.',
      };
    }
    
    await response.json();
    
    return {
      success: true,
      message: 'Thank you. We will reach out shortly.',
    };
  } catch (error) {
    console.error('Error submitting contact form:', error);
    return {
      success: false,
      message: 'An error occurred. Please try again later.',
    };
  }
}

export function getStrapiImageUrl(image: StrapiImage | undefined): string {
  if (!image?.url) return '';
  return image.url.startsWith('http') ? image.url : `${STRAPI_URL}${image.url}`;
}
