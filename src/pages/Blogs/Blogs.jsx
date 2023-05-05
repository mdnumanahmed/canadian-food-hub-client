import { Accordion } from "flowbite-react";
import React, { createRef } from "react";
import ReactToPdf from "react-to-pdf";
import { FaRegArrowAltCircleDown } from "react-icons/fa";

const Blogs = () => {
  const ref = createRef();
  return (
    <div className="container mx-auto" ref={ref}>
      <Accordion arrowIcon={FaRegArrowAltCircleDown}>
        <Accordion.Panel>
          <Accordion.Title>
            1. Tell us the differences between uncontrolled and controlled
            components.
          </Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              controlled component - In a controlled component, form data is
              handled by a React component. uncontrolled component - The
              alternative is uncontrolled components, where form data is handled
              by the DOM itself. To write an uncontrolled component, instead of
              writing an event handler for every state update, you can use a ref
              to get form values from the DOM.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>
            2. How to validate React props using PropTypes?
          </Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              propTypes is used to verify the input type for props in react. If
              you try to put any other type, then it will give you warning in
              console. For example, if you set name should be string, but you
              pass something else like number then it will give you warning in
              console and also the result might get different. After you define
              patterns in for propTypes you should set default values for props
              as well.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>
            3. Tell us the difference between nodejs and express js?
          </Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              ----Express.js-----
            </p>

            <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
              <li>
                It is used to build web-apps using approaches and principles of
                Node.js.
              </li>
              <li>It is built on Node.js.</li>
              <li>Framework based on Node.js.</li>
              <li>It requires less coding time.</li>
              <li>Written in:JavaScript</li>
            </ul>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              -----Node.js----
            </p>

            <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
              <li>
                It is used to build web-apps using approaches and principles of
                Node.js.
              </li>
              <li>It is built on Google’s V8 engine.</li>
              <li>
                Run-time platform or environment designed for server-side
                execution of JavaScript.
              </li>
              <li>It requires more coding time.</li>
              <li>Written in:C, C++, JavaScript</li>
            </ul>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>
            4. What is a custom hook, and why will you create a custom hook?
          </Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              ---Custom Hook--- <br />
              What is a custom hook? A custom Hook is a JavaScript function
              whose name starts with ”use” and that may call other Hooks. That's
              it! If you have code in a component that you feel would make sense
              to extract, either for reuse elsewhere or to keep the component
              simpler, you can pull that out into a function. <br />
              With Hooks, you can extract stateful logic from a component so it
              can be tested independently and reused. Hooks allow you to reuse
              stateful logic without changing your component hierarchy. This
              makes it easy to share Hooks among many components or with the
              community.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
      <ReactToPdf targetRef={ref} filename="blog-page.pdf">
        {({ toPdf }) => (
          <button
            type="button"
            onClick={toPdf}
            class=" block mt-8 mx-auto text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
          >
            Generate pdf
          </button>
        )}
      </ReactToPdf>
    </div>
  );
};

export default Blogs;
