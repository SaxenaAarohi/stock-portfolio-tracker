type Props = {
  title: string,
  line: string

}

export default function Navbar({ title, line }: Props) {
  return (
   
   <div className=" top-0 left-40 w-[86%] md:w-[97%] md:ml-0 ml-12  pt-4 shadow-sm">
    
      <h1 className="text-2xl font-semibold">{title}</h1>
      <p className="text-gray-400 pb-1">{line}</p>
     
      <hr className="text-gray-600 " />

    </div>

  );
}
