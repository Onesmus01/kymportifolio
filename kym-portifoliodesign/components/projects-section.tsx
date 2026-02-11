interface Project {
  title: string
  description: string
  technologies: string[]
  highlights: string[]
}

const projects: Project[] = [
  {
    title: 'Power Distribution System Design',
    description:
      'Designed and implemented a comprehensive power distribution system for an industrial facility with redundancy and safety features.',
    technologies: ['AutoCAD', 'MATLAB', 'Circuit Design', 'Load Analysis'],
    highlights: [
      'Three-phase distribution setup',
      'Transformer coordination',
      'Protective relay configuration',
      'System efficiency improvement by 15%',
    ],
  },
  {
    title: 'Motor Control & Automation System',
    description:
      'Developed automated motor control system with variable frequency drives for process optimization and energy efficiency.',
    technologies: ['VFD', 'PLC', 'MATLAB', 'Control Theory'],
    highlights: [
      'Soft-start configuration',
      'Speed control optimization',
      'Energy consumption reduced by 20%',
      'Reduced downtime by 30%',
    ],
  },
  {
    title: 'High-Voltage Line Installation Project',
    description:
      'Led field installation of overhead HV/LV power lines for rural electrification with full safety compliance.',
    technologies: [
      'HV Systems',
      'Installation',
      'Safety Protocols',
      'Maintenance',
    ],
    highlights: [
      'Safe installation at heights',
      'Zero safety incidents',
      'Transformer handling expertise',
      'Line testing and commissioning',
    ],
  },
  {
    title: 'Industrial Welding & Fabrication',
    description:
      'Performed specialized welding and metal fabrication for structural and mechanical components with quality assurance.',
    technologies: [
      'MIG Welding',
      'TIG Welding',
      'Arc Welding',
      'Metal Fabrication',
    ],
    highlights: [
      'Met all project specifications',
      'Strong and clean welds',
      'Multiple metal types handled',
      'Documentation and reporting',
    ],
  },
  {
    title: 'Earthing System Design & Installation',
    description:
      'Designed and installed earthing systems for electrical safety in commercial and industrial buildings.',
    technologies: ['Earthing Design', 'Safety Standards', 'Testing', 'Compliance'],
    highlights: [
      'HSE compliance achieved',
      'Impedance testing passed',
      'Safety certification obtained',
      'Preventive maintenance schedule',
    ],
  },
  {
    title: 'Transformer Maintenance & Diagnostics',
    description:
      'Comprehensive maintenance, testing, and troubleshooting of transformer systems in refinery operations.',
    technologies: ['Transformer Testing', 'Diagnostics', 'Oil Analysis', 'Safety'],
    highlights: [
      'Fuse replacement and testing',
      'Oil condition monitoring',
      'Preventive maintenance',
      'Downtime reduction',
    ],
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-foreground mb-12 text-balance">
          Key Projects & Achievements
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 border border-border hover:border-accent/50 transition-all hover:shadow-lg"
            >
              <h3 className="text-xl font-bold text-foreground mb-3">{project.title}</h3>

              <p className="text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="mb-4">
                <p className="text-sm font-semibold text-accent mb-2">Key Highlights</p>
                <ul className="space-y-1">
                  {project.highlights.map((highlight, idx) => (
                    <li
                      key={idx}
                      className="flex gap-2 text-sm text-muted-foreground"
                    >
                      <span className="text-accent">→</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 bg-background border border-accent/30 text-accent text-xs rounded font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
