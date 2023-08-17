const shopsData = [
    {
        name : 'Saree Bhawan',
        address : 'Hazzratganj Lucknow',
        contact : 1236547896,
        image : 'https://www.treebo.com/blog/wp-content/uploads/2018/03/Hazratganj.jpg',
        items: [
            {
                name : 'sarree',
                price : 20000,
                image: 'https://assets.ajio.com/medias/sys_master/root/20230621/r2Fl/649254c742f9e729d762209f/-1117Wx1400H-463532274-green-MODEL.jpg',
            }, {
                name : 'sarree',
                price : 20550,
                image: 'https://5.imimg.com/data5/UC/JN/ZM/SELLER-37269396/beautiful-and-gorgeous-party-and-wedding-wear-designer-saree-500x500.jpg',
            },  {
                name : 'sarree',
                price : 200,
                image: 'data:image/jpeg;base64,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',
            }
        ]
    }


,    {
        name : 'Jhumka',
        address : 'Hazzatganj Lucknow',
        contact : 1254125321,
        image : 'https://okcredit-blog-images-prod.storage.googleapis.com/2021/04/Lucknow1--1-.jpg',
        items: [
            {
                name : 'Jhumka',
                price : 200,
                image: 'https://www.sneharateria.com/cdn/shop/articles/malhar-jhumkas-earrings-blingvine-481565_750x_201e5e28-7d24-4c3e-af16-47822dd4d250.jpg?v=1678074785',
            }, {
                name : 'Jhumka',
                price : 400,
                image: 'https://rukminim2.flixcart.com/image/850/1000/xif0q/earring/d/b/c/-original-imagqhqzjkgxzyvm.jpeg?q=90',
            }, {
                name : 'Jhumka',
                price : 400,
                image: 'https://rukminim2.flixcart.com/image/850/1000/xif0q/earring/d/b/c/-original-imagqhqzjkgxzyvm.jpeg?q=90',
            }
        ]
    }, {
        name : 'Kurta',
        address : 'Hazzatganj Lucknow',
        contact : 1254125321,
        image : 'https://www.fabhotels.com/blog/wp-content/uploads/2018/10/1000x650-227.jpg',
        items: [
            {
                name : 'Kurti',
                price : 20340,
                image: 'https://m.media-amazon.com/images/I/71z2VlDmzmL._SL1500_.jpg',
            }, {
                name : 'Kurti',
                price : 20340,
                image: 'https://m.media-amazon.com/images/I/71z2VlDmzmL._SL1500_.jpg',
            }, {
                name : 'Kurti',
                price : 20340,
                image: 'https://m.media-amazon.com/images/I/71z2VlDmzmL._SL1500_.jpg',
            }
        ]
    }, {
        name : 'Shojk1',
        address : 'Address 1',
        contact : 'Phone 1',
        image : 'Image 1',
        items: [
            {
                name : 'Item 1',
                price : 200,
                image: 'Image 1',
            }
        ]
    }, {
        name : 'Shojk1',
        address : 'Address 1',
        contact : 'Phone 1',
        image : 'Image 1',
        items: [
            {
                name : 'Item 1',
                price : 200,
                image: 'Image 1',
            }
        ]
    }, {
        name : 'Shojk1',
        address : 'Address 1',
        contact : 'Phone 1',
        image : 'Image 1',
        items: [
            {
                name : 'Item 1',
                price : 200,
                image: 'Image 1',
            }
        ]
    }, {
        name : 'Shojk1',
        address : 'Address 1',
        contact : 'Phone 1',
        image : 'Image 1',
        items: [
            {
                name : 'Item 1',
                price : 200,
                image: 'Image 1',
            }
        ]
    }, {
        name : 'Shojk1',
        address : 'Address 1',
        contact : 'Phone 1',
        image : 'Image 1',
        items: [
            {
                name : 'Item 1',
                price : 200,
                image: 'Image 1',
            }
        ]
    }, {
        name : 'Shojk1',
        address : 'Address 1',
        contact : 'Phone 1',
        image : 'Image 1',
        items: [
            {
                name : 'Item 1',
                price : 200,
                image: 'Image 1',
            }
        ]
    }, {
        name : 'Shojk1',
        address : 'Address 1',
        contact : 'Phone 1',
        image : 'Image 1',
        items: [
            {
                name : 'Item 1',
                price : 200,
                image: 'Image 1',
            }
        ]
    }

] 

export default shopsData;