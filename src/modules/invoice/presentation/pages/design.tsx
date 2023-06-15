import React from "react"
import ThreeColumnLayout from "../layouts/three_column_layout"
import FlowBoard from "../components/FlowBoard"

export const DesignPage: React.FC = () => {
    return (
        <div style={{ flex: 1, display: 'flex' }}>
            <ThreeColumnLayout >
                <FlowBoard />
            </ThreeColumnLayout>
        </div>
    )
}