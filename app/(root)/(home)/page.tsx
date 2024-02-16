import QuestionCard from "@/components/cards/QuestionCard";
import HomeFilters from "@/components/home/HomeFilters";
import Filter from "@/components/shared/Filter";
import NoResult from "@/components/shared/NoResult";
import LocalSearchbar from "@/components/shared/search/LocalSearchbar";
import { Button } from "@/components/ui/button";
import { HomePageFilters } from "@/constants/filters";
import Link from "next/link";
import React from "react";

const Home = () => {
  const questions = [
    {
      _id: "1",
      title: "Cascading Deletes in SQL",
      tags: [
        { _id: "tag1", name: "database" },
        { _id: "tag2", name: "sql" },
      ],
      author: {
        _id: "author1",
        name: "John Doe",
        picture: "https://example.com/johndoe.jpg",
      },
      upvotes: 15,
      views: 120,
      answers: [
        { answerId: "ans1", text: "You can use CASCADE constraints in SQL." },
        { answerId: "ans2", text: "Consider using triggers for more control." },
      ],
      createdAt: new Date("2021-09-01T12:00:00.000Z"),
    },
    {
      _id: "2",
      title: "How to Center a Div",
      tags: [
        { _id: "tag3", name: "html" },
        { _id: "tag4", name: "css" },
      ],
      author: {
        _id: "author2",
        name: "Adrian",
        picture: "https://example.com/adrian.jpg",
      },
      upvotes: 20,
      views: 150,
      answers: [
        {
          answerId: "ans3",
          text: "Use margin: auto for horizontal centering.",
        },
        { answerId: "ans4", text: "Flexbox and grid are also great options." },
      ],
      createdAt: new Date("2021-09-02T10:30:00.000Z"),
    },
  ];

  return (
    <>
      <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>

        <Link href="/qna" className="flex justify-end max-sm:w-full">
          <Button className="primary-gradient min-h-[46px] px-4 py-3 text-light-900">
            Ask Question
          </Button>
        </Link>
      </div>

      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearchbar
          route="/"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search for questions"
          otherClasses="flex-1"
        />

        <Filter
          filters={HomePageFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px]"
          containerClasses="hidden max-md:flex"
        />
      </div>

      <HomeFilters />

      <div className="mt-10 flex w-full flex-col gap-6">
        {questions.length > 0 ? (
          questions.map((question) => (
            <QuestionCard
              key={question._id}
              _id={question._id}
              title={question.title}
              tags={question.tags}
              author={question.author}
              upvotes={question.upvotes}
              views={question.views}
              answers={question.answers}
              createdAt={question.createdAt}
            />
          ))
        ) : (
          <NoResult
            title="There's no question to show"
            description="Be the first to break the silence! Ask a Question and kickstart the discussion. your query could be the next big thing others learn from. Get involved!"
            link="/qna"
            linkTitle="Ask a question"
          />
        )}
      </div>
    </>
  );
};

export default Home;
