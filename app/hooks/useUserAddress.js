const useUserAddress = async () => {
    let address = {}
    let response = await fetch("/api/address/get")

    if (response) {
        let data = await response.json();
        if (data) address = data
    }

    return address
}

export default useUserAddress;