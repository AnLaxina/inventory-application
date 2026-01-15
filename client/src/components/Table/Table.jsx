import "./table.module.css";

export default function Table({ data = undefined }) {
    function getRowNames() {
        if (data.length === 0) {
            return [];
        }
        return Object.keys(data[0]);
    }

    function getData() {
        if (data.length === 0) {
            return [];
        }

        return data.map((dataPiece) => Object.values(dataPiece));
    }

    function displayHeads() {
        const rows = getRowNames();
        return rows.map((row) => <th key={row}>{row}</th>);
    }

    function displayBody() {
        const rows = getData();
        return rows.map((row) => (
            <tr key={row[0]}>
                {row.map((value, index) => {
                    return <td key={index}>{value}</td>;
                })}
            </tr>
        ));
    }

    return (
        <>
            {!data ? (
                <p>There's no data so.... table is not here!</p>
            ) : (
                <table>
                    <thead>
                        <tr>{displayHeads()}</tr>
                    </thead>
                    <tbody>{displayBody()}</tbody>
                </table>
            )}
        </>
    );
}
