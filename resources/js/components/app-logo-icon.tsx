import { SVGAttributes } from 'react';

export default function AppLogoIcon({ className = "text-black", ...props }: SVGAttributes<SVGElement>) {
    return (
        <>
            {/* Created with Inkscape (http://www.inkscape.org/)*/}

            <svg
                {...props}
                fill={'currentColor'}
                className={className}
                width="160.48732mm"
                height="128.95334mm"
                viewBox="0 0 160.48732 128.95334"
                version="1.1"
                id="svg1"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs id="defs1" />
                <g id="layer1" transform="translate(-16.025009,-59.945826)">
                    <circle id="path1" cx="96.023926" cy="142.06792" r="46.831249" />
                    <circle id="circle1" cx="141.51233" cy="94.945824" r="35" />
                    <circle id="circle2" cx="51.025009" cy="94.945824" r="35" />
                </g>
            </svg>
        </>
    );
}
