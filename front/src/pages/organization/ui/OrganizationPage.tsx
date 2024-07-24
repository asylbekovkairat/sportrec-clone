import { OrgMainInfo, OrganizationEvents } from '~widgets/organization';

export const OrganizationPageContent = () => {
  return (
    <section className="grid gap-4 grid-cols-3 mt-6">
      <div className="grid gap-6 col-span-2 ">
        <OrgMainInfo />
        <OrganizationEvents />
      </div>
      <div className="grid col-span-1">
        <div className="w-full h-4 rounded-[20px] bg-black px-[28px] py-[20px]"></div>
      </div>
    </section>
  );
};
