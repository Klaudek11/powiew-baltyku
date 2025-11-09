import { Injectable } from '@angular/core';

@Injectable()
export class PhotoService {
  getData() {
    return [
      {
        itemImageSrc: '/1.jpeg',
        thumbnailImageSrc: '/1.jpeg',
        alt: '1',
        title: '1',
      },
      {
        itemImageSrc: '/2.jpeg',
        thumbnailImageSrc: '/2.jpeg',
        alt: '2',
        title: '2',
      },
      {
        itemImageSrc: '/3.jpeg',
        thumbnailImageSrc: '/3.jpeg',
        alt: '3',
        title: '3',
      },
      {
        itemImageSrc: '/4.jpeg',
        thumbnailImageSrc: '/4.jpeg',
        alt: '4',
        title: '4',
      },
      {
        itemImageSrc: '/5.jpeg',
        thumbnailImageSrc: '/5.jpeg',
        alt: '5',
        title: '5',
      },
      {
        itemImageSrc: '/6.jpeg',
        thumbnailImageSrc: '/6.jpeg',
        alt: '6',
        title: '6',
      },
      {
        itemImageSrc: '/7.jpeg',
        thumbnailImageSrc: '/7.jpeg',
        alt: '7',
        title: '7',
      },
      {
        itemImageSrc: '/8.jpeg',
        thumbnailImageSrc: '/8.jpeg',
        alt: '8w',
        title: '8',
      },
      {
        itemImageSrc: '/9.jpeg',
        thumbnailImageSrc: '/9.jpeg',
        alt: '9',
        title: '9',
      },
      {
        itemImageSrc: '/10.jpeg',
        thumbnailImageSrc: '/10.jpeg',
        alt: '10',
        title: '10',
      },
      {
        itemImageSrc: '/11.jpeg',
        thumbnailImageSrc: '/11.jpeg',
        alt: '11',
        title: '11',
      },
      {
        itemImageSrc: '/21.jpeg',
        thumbnailImageSrc: '/21.jpeg',
        alt: '21',
        title: '21',
      },
      {
        itemImageSrc: '/image1.jpeg',
        thumbnailImageSrc: '/image1.jpeg',
        alt: 'Zdjęcie 1',
        title: '1',
      },
      {
        itemImageSrc: '/image2.jpeg',
        thumbnailImageSrc: '/image2.jpeg',
        alt: 'Zdjęcie 2',
        title: '2',
      },
      {
        itemImageSrc: '/image3.jpeg',
        thumbnailImageSrc: '/image3.jpeg',
        alt: 'Zdjęcie 3',
        title: '3',
      },
      {
        itemImageSrc: '/image4.jpeg',
        thumbnailImageSrc: '/image4.jpeg',
        alt: 'Zdjęcie 4',
        title: '4',
      },
      {
        itemImageSrc: '/image5.jpeg',
        thumbnailImageSrc: '/image5.jpeg',
        alt: 'Zdjęcie 5',
        title: '5',
      },
      {
        itemImageSrc: '/image6.jpeg',
        thumbnailImageSrc: '/image6.jpeg',
        alt: 'Zdjęcie 6',
        title: '6',
      },
      {
        itemImageSrc: '/image7.jpeg',
        thumbnailImageSrc: '/image7.jpeg',
        alt: 'Zdjęcie 7',
        title: '7',
      },
      {
        itemImageSrc: '/image8.jpeg',
        thumbnailImageSrc: '/image8.jpeg',
        alt: 'Zdjęcie 8',
        title: '8',
      },
      {
        itemImageSrc: '/image9.jpeg',
        thumbnailImageSrc: '/image9.jpeg',
        alt: 'Zdjęcie 9',
        title: '9',
      },
      {
        itemImageSrc: '/image10.jpeg',
        thumbnailImageSrc: '/image10.jpeg',
        alt: 'Zdjęcie 10',
        title: '10',
      },
      {
        itemImageSrc: '/image11.jpeg',
        thumbnailImageSrc: '/image11.jpeg',
        alt: 'Zdjęcie 11',
        title: '11',
      },
      {
        itemImageSrc: '/image12.jpeg',
        thumbnailImageSrc: '/image12.jpeg',
        alt: 'Zdjęcie 12',
        title: '12',
      },
      {
        itemImageSrc: '/image13.jpeg',
        thumbnailImageSrc: '/image13.jpeg',
        alt: 'Zdjęcie 13',
        title: '13',
      },
      {
        itemImageSrc: '/image14.jpeg',
        thumbnailImageSrc: '/image14.jpeg',
        alt: 'Zdjęcie 14',
        title: '14',
      },
      {
        itemImageSrc: '/image15.jpeg',
        thumbnailImageSrc: '/image15.jpeg',
        alt: 'Zdjęcie 15',
        title: '15',
      },
      {
        itemImageSrc: '/image16.jpeg',
        thumbnailImageSrc: '/image16.jpeg',
        alt: 'Zdjęcie 16',
        title: '16',
      },
      {
        itemImageSrc: '/image17.jpeg',
        thumbnailImageSrc: '/image17.jpeg',
        alt: 'Zdjęcie 17',
        title: '17',
      },
      {
        itemImageSrc: '/image18.jpeg',
        thumbnailImageSrc: '/image18.jpeg',
        alt: 'Zdjęcie 18',
        title: '18',
      },
      {
        itemImageSrc: '/image20.jpeg',
        thumbnailImageSrc: '/image20.jpeg',
        alt: 'Zdjęcie 20',
        title: '20',
      },
    ];
  }

  getImages() {
    return Promise.resolve(this.getData());
  }
}
