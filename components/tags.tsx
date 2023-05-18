export default function Tag({
    text
  }: {
    text: string,
  }) {
  
    return (
      <span className="text-gray-400 text-base mx-1 p-1">
          #{text}
      </span>
    )
  }
  