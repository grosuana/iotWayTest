all: ./build/ui/vendor.js
	cp start.sh build/
	grunt fastui

build/ui/vendor.js: ./package.json
	grunt vendor

clean:
	rm -rf build/