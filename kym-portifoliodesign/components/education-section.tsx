interface EducationItem {
  degree: string
  institution: string
  period: string
  grade: string
  details?: string
}

interface CertificationItem {
  title: string
  issuer: string
  year: string
}

const education: EducationItem[] = [
  {
    degree: 'Bachelor of Technology in Electrical Engineering',
    institution: 'Technical University of Mombasa',
    period: '2018 - 2023',
    grade: 'Second Class (Lower Division)',
    details:
      'Specialized in power systems, industrial control, and electrical machine design with practical field experience.',
  },
  {
    degree: 'K.C.S.E Certificate',
    institution: "Kyangondu Secondary School",
    period: '2013 - 2017',
    grade: 'Grade B',
  },
  {
    degree: 'K.C.P.E Certificate',
    institution: 'Miau Primary School',
    period: '2004 - 2012',
    grade: 'Grade B',
  },
]

const certifications: CertificationItem[] = [
  {
    title: 'Electrical Safety Compliance & HSE Standards',
    issuer: 'Industrial Safety Board',
    year: '2022',
  },
  {
    title: 'HV/LV Line Installation & Maintenance',
    issuer: 'Power Authority',
    year: '2021',
  },
  {
    title: 'Motor Control & VFD Operations',
    issuer: 'Technical Institute',
    year: '2023',
  },
  {
    title: 'Welding Certification - MIG, TIG, Arc',
    issuer: 'Welding Association',
    year: '2020',
  },
]

export function EducationSection() {
  return (
    <section id="education" className="py-20 px-4 bg-card">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-foreground mb-12 text-balance">
          Education & Certifications
        </h2>

        <div className="space-y-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold text-accent mb-6">Education</h3>
            <div className="space-y-4">
              {education.map((edu, index) => (
                <div key={index} className="bg-background rounded-lg p-6 border border-border">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="text-lg font-bold text-foreground">{edu.degree}</h4>
                      <p className="text-accent font-semibold">{edu.institution}</p>
                    </div>
                    <span className="text-sm text-muted-foreground">{edu.period}</span>
                  </div>
                  <p className="text-muted-foreground mb-2">Grade: {edu.grade}</p>
                  {edu.details && (
                    <p className="text-muted-foreground text-sm">{edu.details}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-accent mb-6">Professional Certifications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-background rounded-lg p-6 border border-border">
                  <h4 className="text-lg font-bold text-foreground mb-2">{cert.title}</h4>
                  <p className="text-accent font-semibold text-sm">{cert.issuer}</p>
                  <p className="text-muted-foreground text-sm mt-2">Obtained: {cert.year}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-background rounded-lg p-8 border border-accent/30">
          <h3 className="text-xl font-bold text-accent mb-4">Languages</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="font-semibold text-foreground mb-2">English</p>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="w-3 h-3 rounded-full bg-accent"
                  />
                ))}
              </div>
              <p className="text-sm text-muted-foreground mt-2">Excellent</p>
            </div>
            <div>
              <p className="font-semibold text-foreground mb-2">Kiswahili</p>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="w-3 h-3 rounded-full bg-accent"
                  />
                ))}
              </div>
              <p className="text-sm text-muted-foreground mt-2">Excellent</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
