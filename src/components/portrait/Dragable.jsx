import { DraggableCardContainer, DraggableCardBody } from "../ui/DraggableCard";

export default function Dragable({ pics }) {
  return (
    <div className="flex flex-wrap justify-center gap-6">
      {pics.map((pic, index) => (
        <DraggableCardContainer key={index}>
          <DraggableCardBody>
            <img
              src={pic.url}
              alt={pic.title}
              className="w-full h-auto object-cover rounded-md"
            />
          </DraggableCardBody>
        </DraggableCardContainer>
      ))}
    </div>
  );
}
