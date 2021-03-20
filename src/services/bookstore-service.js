export default class BookstoreService {
    data = [
        {
            id: 1,
            title: 'Production-Ready Microservices',
            author: 'Susan J/ Fowler',
            price: 32,
            coverImage: ''
        },
        {
            id: 2,
            title: 'Release It!',
            author: 'Michael T. Nygrard',
            price: 30,
            coverImage: ''
        }
    ];

    getBooks() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (Math.random() > 0.75) {
                    reject(new Error('Something error'));
                } else {
                    resolve(this.data)
                }
            }, 700);
        })
    }
}
