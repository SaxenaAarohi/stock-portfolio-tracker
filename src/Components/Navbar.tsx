//@ts-nocheck
export default function Navbar({title , line}) {
  return (
    <div className="fixed top-0 left-0 w-full md:ml-64 ml-12   pt-4 shadow-sm">
      <h1 className="text-2xl font-semibold">{title}</h1>
      <p className="text-gray-400 pb-2">{line}</p>
  <hr className="text-gray-600"/>
    </div>
  );
}
