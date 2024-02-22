const UpcomingAppointment = () => (
  <div className="gap-6 mt-10 py-10 px-10 border-2 border-gray-100 shadow-md rounded-md">
    <div className="w-full">
      <div className="flex sm:flex-row flex-col gap-5 sm:gap-0 justify-between items-center w-full mb-4">
        <h3 className="text-lg font-semibold">Upcoming Appointment</h3>
        <p className="text-sm text-black bg-[#D0FBFF] px-5 py-2 rounded-md font-bold">
          August 12, 2021
        </p>
        <p className="text-sm">Consultation with Dr. James</p>
      </div>
    </div>
  </div>
);

export default UpcomingAppointment;
