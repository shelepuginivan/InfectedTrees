export const getCurrentPosition = () => new Promise<GeolocationPosition>((resolve , reject) => {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(resolve, reject, {
			enableHighAccuracy: true
		})
	}
})
