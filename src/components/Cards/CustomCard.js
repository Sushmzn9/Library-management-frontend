import Card from "react-bootstrap/Card";

const CustomCard = ({ title, author, thumbnail, year }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={thumbnail} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {author}
          <br />
          {year}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CustomCard;
