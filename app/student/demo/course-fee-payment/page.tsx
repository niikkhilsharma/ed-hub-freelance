"use client";

import StudentWrapper from "@/components/student-wrapper";
import FooterNew from "@/components/footer3";
import { Button } from "@/components/ui/button";
import { ReviewCard, reviews } from "../course-details/page";

export default function AfterDemoCourseFeePayment() {
  return (
    <StudentWrapper blue>
      <div className="relative z-10 bg-[#E3E3E3]">
        <section className="px-16 py-8">
          <div className="rounded-xl bg-white space-y-4 p-4">
            <div className="md:grid md:grid-cols-[1fr_1fr] p-4 gap-16">
              <div className="space-y-5">
                <h1 className=" text-center text-4xl font-bold text-[#8DD9B3]">
                  What Our Learners Are Saying
                </h1>
                <div
                  className="grid grid-cols-1 lg:grid-cols-2 gap-x-3 gap-y-1 h-[600px] overflow-y-auto"
                  style={{
                    scrollbarWidth: "thin",
                    scrollbarColor: "#FFA500 transparent",
                  }}
                >
                  <style jsx>{`
                    div::-webkit-scrollbar {
                      width: 8px;
                    }
                    div::-webkit-scrollbar-track {
                      background: transparent;
                    }
                    div::-webkit-scrollbar-thumb {
                      background: #ffa500;
                      border-radius: 4px;
                    }
                    div::-webkit-scrollbar-thumb:hover {
                      background: #ff8c00;
                    }
                  `}</style>
                  {reviews.map((review, index) => (
                    <ReviewCard key={`${review.id}-${index}`} review={review} />
                  ))}
                </div>
              </div>
              <div className="space-y-2 mt-4 sm:mt-0">
                <img
                  alt="course pack image"
                  src="/student/courses/detail/hero.png"
                  className="block mx-auto rounded-3xl"
                />
                <div className="border border-zinc-200 rounded-3xl space-y-2 p-6 text-center">
                  <h2 className="font-semibold text-lg">Enjoyed the Demo?</h2>
                  <p className="text-sm font-semibold text-[#6B7280] text-center">
                    Unlock the full course and continue your learning journey
                    with us!
                  </p>
                  <Button className="bg-[#3366ff] w-full text-white px-8 py-6 hover:bg-[#0c45f0] hover:text-white rounded-full">
                    Pay Fees and Enroll Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="z-10 absolute">
        <FooterNew showSuscriptionBlock={false} />
      </div>
    </StudentWrapper>
  );
}
