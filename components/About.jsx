import Image from "next/image";
import SectionTitle from "./SectionTitle";

const About = () => {
  return (
    <>
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="700"
        className="wrapper py-10 min-h-full "
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div
            data-aos="flip-left"
            data-aos-duration="1000"
            data-aos-delay="700"
            className="overflow-hidden justify-center items-center mx-auto"
          >
            <Image
              src="https://images.pexels.com/photos/4497785/pexels-photo-4497785.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="image"
              width={500}
              height={500}
              className="overflow-hidden h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col gap-5">
            <div>
              {" "}
              <SectionTitle
                span={"About"}
                h2={"Our Purpose and Promise"}
                p={"Empowering Learners, Igniting Change"}
              />
            </div>
            <p>
              cordemy is good
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="700"
          className="grid  gap-5 "
        >
          <div className="mt-40">
            <p>
              {`   lose is losing but loose is loose`}
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="700"
            className="overflow-hidden justify-center items-center"
          >
            <Image
              src="https://images.pexels.com/photos/289737/pexels-photo-289737.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="image"
              width={500}
              height={500}
              className="overflow-hidden h-full w-full object-cover"
            />
          </div>
          <div data-aos="fade-up" data-aos-duration="500">
            <p>
              {`  anyways.`}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
