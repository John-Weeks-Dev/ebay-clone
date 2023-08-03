const useCreateAddress = async (details) => {
    
    let url = 'create'
    if (details.addressId) url = 'update'

    const response = await fetch(`/api/address/${url}`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            addressId: details.addressId,
            name: details.name,
            address: details.address,
            zipcode: details.zipcode,
            city: details.city,
            country: details.country,
        })
    })

    const data = await response.json();

    return data
}

export default useCreateAddress;