// This custom hook serves two purposes. Firstly, it applies the corresponding color to the border of each color option. Secondly, if a color is selected, it sets the background color to match the selected color.
export function useColorClasses(color: string, itemColor: string) {
  let bgClass = "";
  let borderClass = "";

  switch (color) {
    case "red":
      bgClass = itemColor === color ? "bg-red-400" : "";
      borderClass = "border-red-400";
      break;
    case "green":
      bgClass = itemColor === color ? "bg-green-400" : "";
      borderClass = "border-green-400";
      break;
    case "pink":
      bgClass = itemColor === color ? "bg-pink-400" : "";
      borderClass = "border-pink-400";
      break;
    default:
      break;
  }

  return { bgClass, borderClass };
}
