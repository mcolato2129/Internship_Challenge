export const fetchProducts = () => [
    {
        "id": "1",
        "object": "product",
        "active": true,
        "attributes": [],
        "created": 1726157207,
        "default_price": "price_1",
        "description": "20 Credit Pulls for account owner. ",
        "images": [],
        "livemode": false,
        "marketing_features": [],
        "metadata": {},
        "name": "20 Single Credit Pulls",
        "tax_code": "txcd_10000000",
        "type": "service",
        "updated": 1726248070,
        "url": null,
    },
    {
        "id": "2",
        "object": "product",
        "active": true,
        "attributes": [],
        "created": 1726157207,
        "default_price": "price_1",
        "description": "20 Tri-Merge Pulls for account owner. ",
        "images": [],
        "livemode": false,
        "marketing_features": [],
        "metadata": {},
        "name": "20 Tri-Merge Credit Pulls",
        "tax_code": "txcd_10000000",
        "type": "service",
        "updated": 1726248070,
        "url": null,
    }
]

export const fetchPrices = () => [
    {
        "id": "price_1",
        "object": "price",
        "active": true,
        "billing_scheme": "per_unit",
        "created": 1726157208,
        "currency": "usd",
        "livemode": false,
        "lookup_key": null,
        "metadata": {},
        "nickname": null,
        "product": "1",
        "type": "recurring",
        "unit_amount": 3000,
        "unit_amount_decimal": "3000"
    },
    {
        "id": "price_2",
        "object": "price",
        "active": true,
        "billing_scheme": "per_unit",
        "created": 1726157208,
        "currency": "usd",
        "livemode": false,
        "lookup_key": null,
        "metadata": {},
        "nickname": null,
        "product": "2",
        "type": "recurring",
        "unit_amount": 4500,
        "unit_amount_decimal": "4500"
    }, 
]

export const fetchUsers = () => [
    {
        userId: 1,
        userType: 'Financial Expert',
        userInfo: {
            name: 'Bernard Johnson'
        },
        metadata: {
            accessLevel: 10
        }
    },
    {
        userId: 2,
        userType: 'Financial Institution',
        userInfo: {
            name: 'Duke Devlin'
        },
        metadata: {
            accessLevel: 5
        }
    },
    {
        userId: 3,
        userType: 'Client - Expert Managed',
        userInfo: {
            name: 'Maximilian Pegasus'
        },
        metadata: {
            accessLevel: 20
        }
    },
]