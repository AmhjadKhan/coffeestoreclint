import Contact1 from "./contact1/Contact1";
import Contact2 from "./contact2/Contact2";
import Contact3 from "./contact3/Contact3";

const Contact = () => {
  return (
    <div>
        <Contact3 />
        <Contact1 />
        <hr className="mt-6" />
       <Contact2 />
    </div>
  );
};

export default Contact;
