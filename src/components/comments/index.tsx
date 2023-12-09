import React, { useState } from "react";
import { Button } from "../ui/button";

// Due to time constraints, the comment registration component was not implemented using Redux and the comments are not being saved.
//////////
// I used React.memo so that with every action in the parent component, the child component is not rendered.

export const Comments = React.memo(() => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [commentsData, setCommentsData] = useState([
    {
      name: "sam",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tempor lectus id elit maximus, eget feugiat leo sagittis. Ut rutrum lacus in nisi maximus, quis placerat turpis commodo",
      img: "https://flowbite.com/docs/images/people/profile-picture-2.jpg",
    },

    {
      name: "ali",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tempor lectus id elit maximus, eget feugiat leo sagittis. Ut rutrum lacus in nisi maximus, quis placerat turpis commodo",
      img: "https://flowbite.com/docs/images/people/profile-picture-2.jpg",
    },
  ]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (name.trim() === "" || description.trim() === "") {
      alert("Please fill in all fields");
      return;
    }

    const newComment = {
      name: name,
      description: description,
      img: "https://flowbite.com/docs/images/people/profile-picture-2.jpg",
    };

    setCommentsData((prevCommentsData) => [...prevCommentsData, newComment]);

    setName("");
    setDescription("");
  };

  return (
    <>
      <section className="mx-auto max-w-screen-xl px-4 md:px-8  py-4  rounded">
        <p className="border-b py-2 mb-3">Comments</p>

        <form className="mb-6 w-2/3" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Your name
            </label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Your name"
            ></input>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Your message
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={4}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Leave a comment..."
            ></textarea>
          </div>
          <Button type="submit">Post comment</Button>
        </form>

        {commentsData.map((item, index) => {
          return (
            <div
              key={index}
              className="p-6 w-2/3 text-base bg-white rounded-lg dark:bg-gray-900"
            >
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center">
                  <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white font-semibold">
                    <img
                      className="mr-2 w-6 h-6 rounded-full"
                      src={item.img}
                      alt="Michael Gough"
                    />
                    {item.name}
                  </p>
                </div>
              </div>
              <p className="text-gray-500 dark:text-gray-400">
                {item.description}
              </p>
            </div>
          );
        })}
      </section>
    </>
  );
});
