import React from 'react';
import { Head, Link } from '@inertiajs/react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import Button from '../components/common/Button';

const StartLearning: React.FC = () => {
  return (
    <>
      <Head>
        <title>Start Learning - Top Talks</title>
        <meta
          name="description"
          content="Start your English learning journey with Top Talks. Connect with qualified teachers and improve your English skills."
        />
      </Head>

      <div className="min-h-screen bg-background">
        <Header />

        <main>
          {/* Hero Section */}
          <section className="py-20 bg-gradient-to-br from-autumn-cream via-background to-autumn-golden/20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
              <div className="text-center space-y-8">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
                  Start Your English Learning Journey
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
                  Learn English with experienced teachers through personalized one-on-one lessons
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/register">
                    <Button size="xl">Get Started Free</Button>
                  </Link>
                  <Link href="/student-services">
                    <Button variant="outline" size="xl">
                      View All Services
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Why Choose Us */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
                Why Learn With Us?
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-3xl">👨‍🏫</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground">Qualified Teachers</h3>
                  <p className="text-muted-foreground">
                    Learn from experienced native English speakers dedicated to your success
                  </p>
                </div>

                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-3xl">⏰</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground">Flexible Schedule</h3>
                  <p className="text-muted-foreground">
                    Book lessons at times that work for you, 7 days a week
                  </p>
                </div>

                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-3xl">🎯</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground">Personalized Learning</h3>
                  <p className="text-muted-foreground">
                    Lessons tailored to your level, goals, and learning style
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* How It Works */}
          <section className="py-20 bg-gradient-to-b from-background to-autumn-cream/20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
                How It Works
              </h2>

              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Create Your Account</h3>
                    <p className="text-muted-foreground">
                      Sign up for free and tell us about your English learning goals
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Choose Your Teacher</h3>
                    <p className="text-muted-foreground">
                      Browse our qualified teachers and find the perfect match for your learning style
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Book Your Lesson</h3>
                    <p className="text-muted-foreground">
                      Schedule your first lesson at a time that works for you
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Start Learning</h3>
                    <p className="text-muted-foreground">
                      Join your online lesson and begin improving your English skills
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-gradient-to-r from-primary/10 via-secondary/10 to-autumn-golden/10">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
              <div className="text-center space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  Ready to Start Learning?
                </h2>
                <p className="text-xl text-muted-foreground">
                  Join thousands of students improving their English with Top Talks
                </p>
                <Link href="/register">
                  <Button size="xl">Start Your Free Trial</Button>
                </Link>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default StartLearning;
