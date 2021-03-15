export default class BookstoreService {
    getBooks() {
        return [
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
    }
}
