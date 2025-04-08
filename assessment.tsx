import MentalHealthTool from '@/components/MentalHealthTool'

export default function AssessmentPage() {
  return (
    <div className="container py-8">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-3xl font-bold mb-6">Mental Health Assessment</h1>
        <p className="text-lg text-muted-foreground mb-8">
          This assessment will help you understand your current mental health status. All responses
          are confidential and anonymous.
        </p>
        <MentalHealthTool />
      </div>
    </div>
  )
}