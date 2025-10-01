import Section from "@/app/components/Section";

export const metadata = { title: "Privacy Policy | Sterling & Associates" };

export default function PrivacyPolicyPage() {
  return (
    <Section title="Privacy Policy">
      <p className="text-sm text-gray-700 dark:text-gray-300">This website provides general information and does not constitute legal advice. We respect your privacy and handle personal data in accordance with applicable laws.</p>
    </Section>
  );
}
