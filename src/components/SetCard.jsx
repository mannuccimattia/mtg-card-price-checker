const SetCard = ({ set }) => {
    return (
        <div className="col-12 col-xl-3 d-flex column-gap-1 align-items-center">
            <div className="card flex-row align-items-center justify-content-between sets-card" data-bs-theme="dark">
                <div
                    className="col-2 set-icon"
                    style={{
                        maskImage: `url(${set.icon_svg_uri})`,
                        WebkitMaskImage: `url(${set.icon_svg_uri})`,
                        backgroundColor: "#a58e4a",
                        width: '24px',
                        height: '24px',
                    }}
                />
                <div className="col-7 set-name">{set.name}</div>
                <div className="col-3 set-code fw-semibold">{set.code}</div>
            </div>
        </div>
    )
}

export default SetCard
