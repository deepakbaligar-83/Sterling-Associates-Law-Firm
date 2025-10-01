import Section from "@/app/components/Section";

export const metadata = { title: "Disclaimer | Sterling & Associates" };

export default function DisclaimerPage() {
  return (
    <Section title="Disclaimer">
      <p className="text-sm text-gray-700 dark:text-gray-300">The information on this site is for general informational purposes only and should not be construed as legal advice. Please consult an attorney for advice about your specific situation.</p>
    </Section>
  );
}
