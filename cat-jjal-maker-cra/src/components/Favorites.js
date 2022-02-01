import CatItem from './CatItem';

function Favorites({ favorites }) {
    if (favorites.length === 0) {
      return <div>사진 위 하트를 눌러 고양이 사진을 저장해봐요!</div>;
    }
  
    return (
      <ul style={{listStyleType: "none"}} className="favorites">
        {favorites.map((cat) => (
          <CatItem img={cat} key={cat} />
        ))}
      </ul>
    );
  }

  export default Favorites;