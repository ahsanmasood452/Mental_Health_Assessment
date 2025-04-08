export default function AboutPage() {
  return (
    <div className="container py-8">
      <div className="mx-auto max-w-4xl space-y-8">
        <h1 className="text-3xl font-bold">About MindCheck</h1>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-lg">
            MindCheck provides free, accessible mental health screening tools to help individuals
            understand their emotional wellbeing and take the first step toward getting help.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">The Assessments</h2>
          <p className="mb-4">
            Our assessments are based on clinically validated screening tools used by healthcare
            professionals worldwide:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>PHQ-9 for depression screening</li>
            <li>GAD-7 for anxiety screening</li>
            <li>PSS for stress assessment</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Disclaimer</h2>
          <p className="text-muted-foreground">
            These assessments are not diagnostic tools and do not replace professional evaluation.
            If you're experiencing distress, please consult with a qualified mental health
            professional.
          </p>
        </section>
      </div>
    </div>
  )
}