export default function Table({ data = undefined }) {
    function getRowNames() {
        if (data.length === 0) {
            return [];
        }
        return Object.keys(data[0]);
    }

    function displayHeads() {
        const rows = getRowNames();
        return rows.map((row) => <th key={row}>{row}</th>);
    }

    function addData() {
        console.log(getRowNames());
    }

    // TODO: Next up, time to add the actual data itself!
    return (
        <>
            {!data ? (
                <p>There's no data so.... table is not here!</p>
            ) : (
                <table>
                    <thead>
                        <tr>{displayHeads()}</tr>
                    </thead>
                </table>
            )}
        </>
    );
}
