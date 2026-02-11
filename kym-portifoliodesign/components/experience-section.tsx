interface ExperienceItem {
  title: string
  company: string
  period: string
  description: string
  highlights: string[]
}

const experiences: ExperienceItem[] = [
  {
    title: 'Field Engineering',
    company: 'Mombasa Refinery',
    period: 'August 2019 - August 2022',
    description:
      'Led electrical installations and maintenance of high-voltage systems, transformer handling, and power line infrastructure.',
    highlights: [
      'Overhead HV & LV line installation and maintenance',
      'Transformer installation, testing, and troubleshooting',
      'Electrical safety compliance and HSE standards',
      'Power distribution board installation and configuration',
      'Preventive maintenance and routine inspections',
    ],
  },
  {
    title: 'Industrial Control Systems Technician',
    company: 'Manufacturing Facility',
    period: '2023 - Present',
    description:
      'Operate and maintain complex control panels, variable frequency drives, and automated production systems.',
    highlights: [
      'Motor control and VFD operation',
      'Three-phase machine installation and commissioning',
      'Pneumatic system operation and maintenance',
      'Sensor and conveyor belt control',
      'Production process optimization',
    ],
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-foreground mb-12 text-balance">
          Professional Experience
        </h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="border-l-2 border-accent pl-8 relative">
              <div className="absolute -left-4 top-0 w-6 h-6 bg-accent rounded-full border-4 border-background" />

              <div className="space-y-3">
                <div>
                  <h3 className="text-2xl font-bold text-foreground">{exp.title}</h3>
                  <p className="text-accent font-semibold">{exp.company}</p>
                  <p className="text-sm text-muted-foreground">{exp.period}</p>
                </div>

                <p className="text-muted-foreground leading-relaxed">{exp.description}</p>

                <ul className="space-y-2">
                  {exp.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex gap-3 text-muted-foreground">
                      <span className="text-accent mt-1">✓</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
