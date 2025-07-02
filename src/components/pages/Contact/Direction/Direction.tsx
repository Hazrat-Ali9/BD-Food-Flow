const Direction = () => {
  const url = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52808140.21705447!2d-161.46429918210544!3d36.11412792251988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sUnited%20States!5e0!3m2!1sen!2sbd!4v1706853218957!5m2!1sen!2sbd" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade`;
  return (
    <div className=" pt-28 ">
      <div className="text-center">
        <h2 className="font-bold  lg:text-4xl text-2xl">
          Direction For Food Flow
        </h2>
        <p className="text-center pt-4">
          Follow the signs and head east towards the or Food Flow , <br />{" "}
          located at the end of the main corridor.
        </p>
      </div>
      <div className="bg-gray-100 dark:bg-slate-900  mt-20">
        <div className="container md:py-16 py-9">
          <div className="">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src={url}
                className="w-full md:h-96 h-60"
                frameBorder="0"
                title="Embedded Map"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Direction;
