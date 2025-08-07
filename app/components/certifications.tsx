import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Award } from "lucide-react"

const certifications = [
  {
    title: "Microsoft Cybersecurity Analyst",
    issuer: "Microsoft",
    date: "Jul 2024",
    credentialId: "2QH68DEGQHC9",
    skills: ["Network Security", "Cloud Security", "Incident Management", "Threat Mitigation"],
  },
  {
    title: "IIT Delhi Cybersecurity & Ethical Hacking Workshop",
    issuer: "Indian Institute of Technology, Delhi",
    date: "May 2025",
    credentialId: "UJVHC4BKZJ3BB9F",
    skills: ["Ethical Hacking", "Penetration Testing"],
  },
  {
    title: "Google Ads Search Certification",
    issuer: "Google",
    date: "Jun 2024",
    credentialId: "",
    skills: ["Digital Marketing", "Ad Search"],
  },
  {
    title: "Pre Security",
    issuer: "TryHackMe",
    date: "Aug 2025",
    credentialId: "THM-177VROM240",
    skills: ["Cybersecurity", "Network Security", "Security Fundamentals"],
  },
]

export default function Certifications() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {certifications.map((cert, index) => (
        <Card key={index} className="h-full">
          <CardHeader className="pb-3">
            <div className="flex items-start justify-between">
              <Award className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
              <div className="flex items-center text-sm text-muted-foreground ml-2">
                <Calendar className="h-4 w-4 mr-1" />
                {cert.date}
              </div>
            </div>
            <CardTitle className="text-lg leading-tight">{cert.title}</CardTitle>
            <p className="text-sm text-muted-foreground">{cert.issuer}</p>
            {cert.credentialId && <p className="text-xs text-muted-foreground">ID: {cert.credentialId}</p>}
          </CardHeader>
          <CardContent className="pt-0">
            <div className="flex flex-wrap gap-1">
              {cert.skills.map((skill) => (
                <Badge key={skill} variant="secondary" className="text-xs">
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
