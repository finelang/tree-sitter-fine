// swift-tools-version:5.3
import PackageDescription

let package = Package(
    name: "TreeSitterFine",
    products: [
        .library(name: "TreeSitterFine", targets: ["TreeSitterFine"]),
    ],
    dependencies: [
        .package(url: "https://github.com/ChimeHQ/SwiftTreeSitter", from: "0.8.0"),
    ],
    targets: [
        .target(
            name: "TreeSitterFine",
            dependencies: [],
            path: ".",
            sources: [
                "src/parser.c",
                // NOTE: if your language has an external scanner, add it here.
            ],
            resources: [
                .copy("queries")
            ],
            publicHeadersPath: "bindings/swift",
            cSettings: [.headerSearchPath("src")]
        ),
        .testTarget(
            name: "TreeSitterFineTests",
            dependencies: [
                "SwiftTreeSitter",
                "TreeSitterFine",
            ],
            path: "bindings/swift/TreeSitterFineTests"
        )
    ],
    cLanguageStandard: .c11
)
