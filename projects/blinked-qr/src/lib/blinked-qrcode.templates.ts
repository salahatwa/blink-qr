export const Templates = (name: string) => {
    switch (name) {
        case 'default':
            return {
                data: '',
                qrOptions: {
                    errorCorrectionLevel: 'Q'
                },
                dotsOptions: {
                    color: '#202020',
                },
                backgroundOptions: {
                    color: "#ffffff",
                }
            };
        case 'ocean':
            return {
                data: '',
                qrOptions: {
                    errorCorrectionLevel: 'Q'
                },
                dotsOptions: {
                    type: 'dots',
                    gradient: {
                        type: 'radial',
                        colorStops: [{
                            offset: 0,
                            color: '#36CDA5'
                        }, {
                            offset: 1,
                            color: '#1582AE'
                        }, {
                            offset: 2,
                            color: '#0277BD'
                        }]
                    }
                },
                backgroundOptions: {
                    color: "#ffffff",
                },
                cornersSquareOptions: {
                    type: 'square'
                }
            };
        case 'sunflower':
            return {
                data: '',
                qrOptions: {
                    errorCorrectionLevel: 'Q'
                },
                dotsOptions: {
                    type: 'dots',
                    gradient: {
                        type: 'radial',
                        colorStops: [{
                            offset: 0,
                            color: '#BB8412'
                        }, {
                            offset: 1,
                            color: '#4D762E'
                        }, {
                            offset: 2,
                            color: '#2F702F'
                        }]
                    }
                },
                backgroundOptions: {
                    color: "#ffffff",
                },
                cornersDotOptions: {
                    color: '#006B3B',
                    type: 'dot'
                },
                cornersSquareOptions: {
                    color: '#006B3B',
                    type: 'extra-rounded'
                }
            };
        case 'luxury':
            return {
                data: '',
                qrOptions: {
                    errorCorrectionLevel: 'Q'
                },
                dotsOptions: {
                    type: 'classy-rounded',
                    gradient: {
                        type: 'radial',
                        colorStops: [{
                            offset: 0,
                            color: '#E29C0F'
                        }, {
                            offset: 1,
                            color: '#913C0C'
                        }, {
                            offset: 2,
                            color: '#732E0C'
                        }]
                    }
                },
                backgroundOptions: {
                    color: "#ffffff",
                },
                cornersDotOptions: {
                    color: '#732E0C',
                    type: 'dot'
                },
                cornersSquareOptions: {
                    color: '#732E0C',
                    type: 'extra-rounded'
                }
            };
        case 'bitcoin':
            return {
                data: '',
                qrOptions: {
                    errorCorrectionLevel: 'Q'
                },
                dotsOptions: {
                    color: '#3a3a3a',
                    type: 'dots'
                },
                backgroundOptions: {
                    color: "#ffffff",
                },
                cornersDotOptions: {
                    color: '#ff9900'
                },
                cornersSquareOptions: {
                    type: 'extra-rounded'
                }
            };
        case 'starbucks':
            return {
                data: '',
                qrOptions: {
                    errorCorrectionLevel: 'Q'
                },
                dotsOptions: {
                    color: '#3a3a3a',
                    type: 'dots'
                },
                backgroundOptions: {
                    color: "#ffffff",
                },
                cornersDotOptions: {
                    color: '#00643C',
                    type: 'dot'
                },
                cornersSquareOptions: {
                    color: '#00643C',
                    type: 'extra-rounded'
                }
            };
        case 'angular':
            return {
                data: '',
                qrOptions: {
                    errorCorrectionLevel: 'Q'
                },
                dotsOptions: {
                    color: '#c3002f',
                    type: 'dots'
                },
                backgroundOptions: {
                    color: "#ffffff",
                }
            };
        case 'facebook':
            return {
                data: '',
                qrOptions: {
                    errorCorrectionLevel: 'Q'
                },
                dotsOptions: {
                    color: '#4D72A9',
                    type: 'dots'
                },
                backgroundOptions: {
                    color: "#ffffff",
                }
            };
        case 'beans':
            return {
                data: '',
                qrOptions: {
                    errorCorrectionLevel: 'Q'
                },
                dotsOptions: {
                    color: '#416B2C',
                    type: 'dots'
                },
                backgroundOptions: {
                    color: "#ffffff",
                },
                cornersDotOptions: {
                    color: '#60A541',
                    type: 'dot'
                },
                cornersSquareOptions: {
                    type: 'extra-rounded'
                }
            };
        case 'green':
            return {
                data: '',
                qrOptions: {
                    errorCorrectionLevel: 'Q'
                },
                dotsOptions: {
                    color: '#006B3B',
                    type: 'dots'
                },
                backgroundOptions: {
                    color: "#ffffff",
                },
                cornersDotOptions: {
                    color: '#006B3B',
                    type: 'dot'
                },
                cornersSquareOptions: {
                    color: '#006B3B',
                    type: 'extra-rounded'
                }
            };
        case 'sky':
            return {
                data: '',
                qrOptions: {
                    errorCorrectionLevel: 'Q'
                },
                dotsOptions: {
                    color: '#2c7597',
                    type: 'rounded'
                },
                backgroundOptions: {
                    color: "#ffffff",
                },
            };
        case 'mosaic':
            return {
                data: '',
                qrOptions: {
                    errorCorrectionLevel: 'Q'
                },
                dotsOptions: {
                    type: 'rounded',
                    gradient: {
                        rotation: 190,
                        type: 'linear',
                        colorStops: [{
                            offset: 0,
                            color: '#0277BD'
                        }, {
                            offset: 1,
                            color: '#943A40'
                        }, {
                            offset: 2,
                            color: '#A13535'
                        }]
                    }
                },
                backgroundOptions: {
                    color: "#ffffff",
                }
            };
        case 'coffee':
            return {
                data: '',
                qrOptions: {
                    errorCorrectionLevel: 'Q'
                },
                dotsOptions: {
                    color: '#5E4F39',
                    type: 'dots'
                },
                backgroundOptions: {
                    color: "#FAEDE7",
                }
            };
        case 'vintage':
            return {
                data: '',
                qrOptions: {
                    errorCorrectionLevel: 'Q'
                },
                dotsOptions: {
                    color: '#2D7363',
                    type: 'extra-rounded'
                },
                backgroundOptions: {
                    color: "#E7E5C5",
                },
                cornersDotOptions: {
                    color: '#BE8C49',
                },
                cornersSquareOptions: {
                    color: '#2D7363',
                }
            };
        case 'stamp':
            return {
                data: '',
                qrOptions: {
                    errorCorrectionLevel: 'Q'
                },
                dotsOptions: {
                    color: '#2a3c16',
                    type: 'square'
                },
                backgroundOptions: {
                    color: "#9cc66e",
                },
                cornersDotOptions: {
                    color: '#4c692c',
                },
                cornersSquareOptions: {
                    color: '#2a3c16',
                }
            };
        case 'chess':
            return {
                data: '',
                qrOptions: {
                    errorCorrectionLevel: 'Q'
                },
                dotsOptions: {
                    color: '#F4EAA5',
                    type: 'dots'
                },
                backgroundOptions: {
                    color: "#494B49",
                }
            };
        case 'jungle':
            return {
                data: '',
                qrOptions: {
                    errorCorrectionLevel: 'Q'
                },
                dotsOptions: {
                    type: 'classy-rounded',
                    gradient: {
                        type: 'radial',
                        colorStops: [{
                            offset: 0,
                            color: '#84b931'
                        }, {
                            offset: 1,
                            color: '#537234'
                        }, {
                            offset: 2,
                            color: '#537234'
                        }]
                    }
                },
                cornersSquareOptions: {
                    color: '#434343',
                    gradient: {
                        type: 'radial',
                        colorStops: [{
                            offset: 0,
                            color: '#84b931'
                        }, {
                            offset: 1,
                            color: '#537234'
                        }, {
                            offset: 2,
                            color: '#537234'
                        }]
                    }
                }
            };
        case 'arabic':
            return {
                data: '',
                qrOptions: {
                    errorCorrectionLevel: 'Q'
                },
                dotsOptions: {
                    type: 'classy-rounded',
                    gradient: {
                        type: 'radial',
                        colorStops: [{
                            offset: 0,
                            color: '#393939'
                        }, {
                            offset: 1,
                            color: '#393939'
                        }, {
                            offset: 2,
                            color: '#393939'
                        }]
                    }
                },
                cornersSquareOptions: {
                    color: '#434343',
                    gradient: {
                        type: 'radial',
                        colorStops: [{
                            offset: 0,
                            color: '#393939'
                        }, {
                            offset: 1,
                            color: '#72a28b'
                        }, {
                            offset: 2,
                            color: '#72a28b'
                        }]
                    }
                }
            };
        case 'tea':
            return {
                data: '',
                qrOptions: {
                    errorCorrectionLevel: 'Q'
                },
                dotsOptions: {
                    type: 'extra-rounded',
                    gradient: {
                        type: 'radial',
                        colorStops: [{
                            offset: 0,
                            color: '#72b0b4'
                        }, {
                            offset: 1,
                            color: '#035558'
                        }, {
                            offset: 2,
                            color: '#035558'
                        }]
                    }
                },
                cornersSquareOptions: {
                    color: '#434343',
                    gradient: {
                        type: 'radial',
                        colorStops: [{
                            offset: 0,
                            color: '#72b0b4'
                        }, {
                            offset: 1,
                            color: '#035558'
                        }, {
                            offset: 2,
                            color: '#035558'
                        }]
                    }
                }
            };
        case 'grape':
            return {
                data: '',
                qrOptions: {
                    errorCorrectionLevel: 'Q'
                },
                dotsOptions: {
                    type: 'rounded',
                    gradient: {
                        type: 'radial',
                        colorStops: [{
                            offset: 0,
                            color: '#7076ae'
                        }, {
                            offset: 1,
                            color: '#2a3240'
                        }, {
                            offset: 2,
                            color: '#2a3240'
                        }]
                    }
                },
                cornersSquareOptions: {
                    color: '#434343',
                    gradient: {
                        type: 'radial',
                        colorStops: [{
                            offset: 0,
                            color: '#7b7cb5'
                        }, {
                            offset: 1,
                            color: '#2a3240'
                        }, {
                            offset: 2,
                            color: '#2a3240'
                        }]
                    }
                }
            };
        default:
            return {
                data: '',
                qrOptions: {
                    errorCorrectionLevel: 'Q'
                },
                dotsOptions: {
                    color: '#202020',
                },
                backgroundOptions: {
                    color: "#ffffff",
                }
            };
    }
};