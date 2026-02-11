interface SkillCategory {
  category: string
  skills: string[]
}

const skillsData: SkillCategory[] = [
  {
    category: 'Software & Tools',
    skills: [
      'MATLAB',
      'AutoCAD',
      'PLC Programming',
      'Multimeters & Oscilloscopes',
      'Function Generators',
      'Power Supplies',
    ],
  },
  {
    category: 'Power Systems',
    skills: [
      'HV/LV Distribution',
      'Transformer Management',
      'Motor Control Systems',
      'Three-Phase Machines',
      'Star-Delta Starters',
      'Control Panels',
    ],
  },
  {
    category: 'Industrial Skills',
    skills: [
      'Field Installation',
      'Motor Rewinding',
      'Electrical Troubleshooting',
      'Preventive Maintenance',
      'Pneumatic Systems',
      'VFD Operation',
    ],
  },
  {
    category: 'Welding & Fabrication',
    skills: [
      'MIG Welding',
      'TIG Welding',
      'Stick Welding',
      'Arc Welding',
      'Metal Fabrication',
      'Weld Inspection',
    ],
  },
  {
    category: 'Electrical Installation',
    skills: [
      'Domestic Wiring',
      'Circuit Design',
      'Cable Management',
      'Lighting Systems',
      'Earthing Systems',
      'Safety Compliance',
    ],
  },
  {
    category: 'Technical Skills',
    skills: [
      'Complex Problem Solving',
      'Cross-functional Collaboration',
      'Technical Wiring Schemes',
      'System Performance Analysis',
      'Linear Systems',
      'Mathematical Calculations',
    ],
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-4 bg-card">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-foreground mb-12 text-balance">
          Technical Skills & Expertise
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((group, index) => (
            <div
              key={index}
              className="bg-background rounded-xl p-6 border border-border hover:border-accent/50 transition-colors"
            >
              <h3 className="text-lg font-bold text-accent mb-4">{group.category}</h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full hover:bg-accent hover:text-accent-foreground transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-background rounded-xl p-6 border border-border text-center">
            <p className="text-4xl font-bold text-accent mb-2">5+</p>
            <p className="text-muted-foreground">Years Field Experience</p>
          </div>
          <div className="bg-background rounded-xl p-6 border border-border text-center">
            <p className="text-4xl font-bold text-accent mb-2">2</p>
            <p className="text-muted-foreground">Languages Fluent</p>
          </div>
          <div className="bg-background rounded-xl p-6 border border-border text-center">
            <p className="text-4xl font-bold text-accent mb-2">100+</p>
            <p className="text-muted-foreground">Projects Completed</p>
          </div>
        </div>
      </div>
    </section>
  )
}
