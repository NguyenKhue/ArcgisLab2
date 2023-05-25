function duplicate () {
    for i in $(seq 1 $2)
    do
        IFS='.' read -r -a array <<< $1
        number=$((${array[3]} + $i))
        cp $1 "${array[0]}.${array[1]}.${array[2]}.$number.geojson.json"
        echo "Made copy '${array[0]}.${array[1]}.${array[2]}.$number.geojson.json'"
    done

}