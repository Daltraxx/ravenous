const mockBusiness = {
    name: 'Krusty Krab',
    image: 'https://static.wikia.nocookie.net/spongebob/images/b/b1/SpongeChovy_065.png',
    alt: 'The Krusty Krab exterior',
    address: '831 Bottom Feeder Lane',
    city: 'Bikini Bottom',
    state: 'Pacific Ocean',
    zipcode: '11111',
    category: 'Fast Food',
    rating: '4.5',
    reviewCount: '100' 

}

const mockBusinessArray = [];

for (let i = 0; i < 6; i++) {
    mockBusinessArray.push(mockBusiness);
}

export default mockBusinessArray;