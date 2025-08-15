import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin } from "lucide-react"

export default function Experience() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex items-start justify-between">
            <div>
              <CardTitle className="text-xl">Executive Member</CardTitle>
              <p className="text-lg text-muted-foreground">OWASP Student Chapter TIET</p>
              <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  Oct 2024 - Present
                </div>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-1" />
                  On-site
                </div>
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4">
            Contributed to the Organizing Team for HACKOWASP 7.0, a premier national-level hackathon with 500+
            participants. Collaborated with cross-functional teams to manage event logistics and participant support.
            Helped ensure smooth execution through real-time coordination and seamless on-ground operations,
            contributing to a successful and impactful hackathon experience.
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline">Event Management</Badge>
            <Badge variant="outline">Team Collaboration</Badge>
            <Badge variant="outline">Marketing</Badge>
            <Badge variant="outline">Public Speaking</Badge>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-xl">Computer Engineering Student</CardTitle>
          <p className="text-lg text-muted-foreground">Thapar Institute of Engineering & Technology</p>
          <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              2024 - 2028
            </div>
            <div className="flex items-center">
              <MapPin className="h-4 w-4 mr-1" />
              Patiala, Punjab, India
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4">
            Bachelor of Engineering in Computer Engineering with a focus on cybersecurity, network security, and ethical
            hacking. Actively participating in cybersecurity workshops, hackathons, and hands-on projects.
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline">Computer Engineering</Badge>
            <Badge variant="outline">Cybersecurity Focus</Badge>
            <Badge variant="outline">Research</Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
