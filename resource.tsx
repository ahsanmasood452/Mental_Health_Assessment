export default function ResourcesPage() {
  const resources = [
    {
      title: "Crisis Hotlines",
      items: [
        { name: "National Suicide Prevention Lifeline", phone: "988", url: "https://988lifeline.org" },
        { name: "Crisis Text Line", phone: "Text HOME to 741741", url: "https://www.crisistextline.org" },
      ]
    },
    {
      title: "Online Therapy",
      items: [
        { name: "BetterHelp", url: "https://www.betterhelp.com" },
        { name: "Talkspace", url: "https://www.talkspace.com" },
      ]
    },
    {
      title: "Educational Resources",
      items: [
        { name: "National Institute of Mental Health", url: "https://www.nimh.nih.gov" },
        { name: "Mental Health America", url: "https://www.mhanational.org" },
      ]
    }
  ]

  return (
    <div className="container py-8">
      <div className="mx-auto max-w-4xl space-y-8">
        <h1 className="text-3xl font-bold">Mental Health Resources</h1>
        
        {resources.map((section) => (
          <section key={section.title} className="space-y-4">
            <h2 className="text-2xl font-semibold">{section.title}</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {section.items.map((item) => (
                <div key={item.name} className="border rounded-lg p-4 hover:bg-accent">
                  <h3 className="font-medium">{item.name}</h3>
                  {item.phone && <p className="text-muted-foreground">{item.phone}</p>}
                  <a 
                    href={item.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-primary hover:underline mt-2 inline-block"
                  >
                    Visit Website
                  </a>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}