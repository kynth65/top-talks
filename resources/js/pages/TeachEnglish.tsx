import React from 'react';
import { Head, Link } from '@inertiajs/react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import Button from '../components/common/Button';

const TeachEnglish: React.FC = () => {
  return (
    <>
      <Head>
        <title>Teach English - Top Talks</title>
        <meta
          name="description"
          content="Join Top Talks as an English teacher. Share your knowledge, work flexibly, and earn competitive pay."
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
                  Teach English Online
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
                  Share your passion for English, work on your schedule, and make a difference in students' lives
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/register">
                    <Button size="xl">Apply Now</Button>
                  </Link>
                  <Link href="/start-teaching">
                    <Button variant="outline" size="xl">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Benefits */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
                Why Teach With Us?
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-3xl">💰</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground">Competitive Pay</h3>
                  <p className="text-muted-foreground">
                    Earn great rates for your teaching expertise with reliable payments
                  </p>
                </div>

                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-3xl">🏠</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground">Work From Anywhere</h3>
                  <p className="text-muted-foreground">
                    Teach from the comfort of your home or anywhere with an internet connection
                  </p>
                </div>

                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-3xl">📅</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground">Flexible Hours</h3>
                  <p className="text-muted-foreground">
                    Set your own schedule and teach when it works best for you
                  </p>
                </div>

                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-3xl">🌍</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground">Global Students</h3>
                  <p className="text-muted-foreground">
                    Connect with students from around the world and share cultures
                  </p>
                </div>

                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-3xl">📚</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground">Materials Provided</h3>
                  <p className="text-muted-foreground">
                    Access our curriculum and teaching resources to make lessons easier
                  </p>
                </div>

                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-3xl">🤝</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground">Supportive Community</h3>
                  <p className="text-muted-foreground">
                    Join a community of teachers with ongoing support and training
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Requirements */}
          <section className="py-20 bg-gradient-to-b from-background to-autumn-cream/20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
                What We're Looking For
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-card rounded-xl p-6 shadow-lg">
                  <h3 className="text-xl font-bold text-foreground mb-4">Requirements</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">✓</span>
                      <span className="text-muted-foreground">Native or fluent English speaker</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">✓</span>
                      <span className="text-muted-foreground">Reliable internet connection</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">✓</span>
                      <span className="text-muted-foreground">Computer with webcam</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">✓</span>
                      <span className="text-muted-foreground">Passion for teaching</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-card rounded-xl p-6 shadow-lg">
                  <h3 className="text-xl font-bold text-foreground mb-4">Preferred</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">✓</span>
                      <span className="text-muted-foreground">Teaching certification (TEFL/TESOL)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">✓</span>
                      <span className="text-muted-foreground">Previous teaching experience</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">✓</span>
                      <span className="text-muted-foreground">University degree</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">✓</span>
                      <span className="text-muted-foreground">Experience with online teaching</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Application Process */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
                Application Process
              </h2>

              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Submit Application</h3>
                    <p className="text-muted-foreground">
                      Fill out our online application form with your details and experience
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Interview</h3>
                    <p className="text-muted-foreground">
                      Have a conversation with our team about your teaching philosophy and goals
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Demo Lesson</h3>
                    <p className="text-muted-foreground">
                      Conduct a short demonstration lesson to showcase your teaching skills
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Start Teaching</h3>
                    <p className="text-muted-foreground">
                      Complete onboarding, set your schedule, and begin teaching students
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
                  Ready to Start Teaching?
                </h2>
                <p className="text-xl text-muted-foreground">
                  Join our community of teachers and make a difference today
                </p>
                <Link href="/register">
                  <Button size="xl">Apply Now</Button>
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

export default TeachEnglish;
