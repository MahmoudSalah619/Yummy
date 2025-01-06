import Icon from "../../Atoms/Icon";

export default function MessageIndicator({
  isRead,
}: {
  isRead: "true" | "false";
}) {
  return (
    <div>
      {isRead === "false" ? (
        <Icon name="message" size={20} color="orange" />
      ) : (
        <Icon name="message" size={20} color="black" />
      )}
    </div>
  );
}
