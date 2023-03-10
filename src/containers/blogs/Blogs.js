import React from "react";
import "./Blogs.css";
import { Article } from "../../components";
import { blog01, blog02, blog03, blog04, blog05 } from "./import";
const Blogs = () => {
  return (
    <div className="gpt3__blog section__padding" id="blog">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">
          A lot is happening, <br /> We are blogging about it.
        </h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA">
          <Article
            imgUrl={blog01}
            date="Jan 01, 2049"
            text="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          />
        </div>
        <div className="gpt3__blog-container_groupB">
          <Article
            imgUrl={blog02}
            date="Jan 01, 2049"
            text="How GPT-3 and OpenAI are Transforming the Future of Language Processing"
          />
          <Article
            imgUrl={blog03}
            date="Jan 01, 2049"
            text="Why GPT-3 and OpenAI are Poised to Lead the Way in the Future of Machine Learning"
          />
          <Article
            imgUrl={blog04}
            date="Jan 01, 2049"
            text="From Chatbots to Creative Writing: How GPT-3 and OpenAI are Changing the Game"
          />
          <Article
            imgUrl={blog05}
            date="Jan 01, 2049"
            text="The Future is Here: How GPT-3 and OpenAI are Redefining Human-Machine Interaction"
          />
        </div>
      </div>
    </div>
  );
};

export default Blogs;
