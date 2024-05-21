export default function Quote(){
    return(
        <div className="mt-10 mb-5 text-center relative flex justify-center items-center">
        <blockquote className="relative text-customColor py-4 px-8 rounded shadow-lg border">
        <span className="absolute -top-3 left-4 text-4xl text-gray-500">“</span>
        <p className="text-lg font-medium">
          With great power comes great electricity bill
        </p>
        <span className="absolute -bottom-3 right-4 text-4xl text-gray-500">”</span>
        <footer className="mt-2 text-right text-gray-400">- Unknown</footer>
      </blockquote>
    </div>
    ) 
}