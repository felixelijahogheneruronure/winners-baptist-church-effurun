// TODO: Implement Authentication check here. Redirect if not admin.
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

export default function AdminPage() {

  // Placeholder content - Replace with actual admin dashboard components
  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <section className="bg-primary text-primary-foreground py-16 md:py-20">
        <div className="container mx-auto max-w-4xl text-center container-padding">
          <h1 className="h1-typography">Admin Dashboard</h1>
          <p className="mt-4 text-lg md:text-xl">Manage website content.</p>
        </div>
      </section>

      {/* Admin Options */}
      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-4xl container-padding">
            <Card>
                <CardHeader>
                    <CardTitle>Content Management</CardTitle>
                </CardHeader>
                <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* TODO: Replace # with actual admin routes */}
                    <Link href="#" className="block p-4 bg-secondary rounded-lg hover:bg-muted">Manage Sermons</Link>
                    <Link href="#" className="block p-4 bg-secondary rounded-lg hover:bg-muted">Manage Events</Link>
                    <Link href="#" className="block p-4 bg-secondary rounded-lg hover:bg-muted">Manage Gallery</Link>
                    <Link href="#" className="block p-4 bg-secondary rounded-lg hover:bg-muted">View Contact Form Submissions</Link>
                     <Link href="#" className="block p-4 bg-secondary rounded-lg hover:bg-muted">Manage Testimonies</Link>
                </CardContent>
            </Card>
             <p className="text-center text-muted-foreground mt-8 text-sm">
                This page requires administrator privileges. Authentication setup needed.
             </p>
        </div>
      </section>
    </div>
  );
}
