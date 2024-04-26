import React from 'react';
import { MasonryGrid } from '@egjs/react-grid';
import { useNavigate } from 'react-router-dom';

export default function Gallery({ galleryData }) {
  const navigate = useNavigate();

  return (
    <MasonryGrid
      className="main__gallery"
      gap={20}
      defaultDirection={'end'}
      align={'stretch'}
      column={2}
      columnSize={0}
      columnSizeRatio={0}>
      {galleryData?.map((gallery) => (
        <div className={'gallery__item'} key={gallery.id} onClick={() => navigate(`${gallery.id}`)}>
          <img src={gallery.image} alt="" loading="lazy" />
          <h6 className="ml-20">{gallery.title}</h6>
          <div>
            <span>{gallery.createdAt}</span>
            <span>by {gallery.nickname}</span>
          </div>
        </div>
      ))}
    </MasonryGrid>
  );
}
