import * as mongoose from 'mongoose';
declare const _default: mongoose.Model<{
    content: string;
    created_at: Date;
    updated_at: Date;
    comments: {
        type?: {
            prototype?: {
                toString: {};
                id?: {
                    [x: number]: unknown;
                    [Symbol.toStringTag]?: unknown;
                    [Symbol.iterator]?: {};
                    length?: unknown;
                    toString: {};
                    indexOf?: {};
                    lastIndexOf?: {};
                    slice?: {};
                    valueOf: {};
                    includes?: {};
                    at?: {};
                    toLocaleString: {};
                    join?: {};
                    every?: {};
                    some?: {};
                    forEach?: {};
                    map?: {};
                    filter?: {};
                    reduce?: {};
                    reduceRight?: {};
                    find?: {};
                    findIndex?: {};
                    entries?: {};
                    keys?: {};
                    values?: {};
                    reverse?: {};
                    sort?: {};
                    fill?: {};
                    copyWithin?: {};
                    BYTES_PER_ELEMENT?: unknown;
                    buffer?: {
                        [Symbol.toStringTag]?: unknown;
                        slice?: {};
                        byteLength?: unknown;
                    } | {
                        [Symbol.toStringTag]?: unknown;
                        slice?: {};
                        [Symbol.species]?: any;
                        byteLength?: unknown;
                    };
                    byteLength?: unknown;
                    byteOffset?: unknown;
                    set?: {};
                    subarray?: {};
                    copy?: {};
                    write?: {};
                    toJSON?: {};
                    equals?: {};
                    compare?: {};
                    writeBigInt64BE?: {};
                    writeBigInt64LE?: {};
                    writeBigUInt64BE?: {};
                    writeBigUint64BE?: {};
                    writeBigUInt64LE?: {};
                    writeBigUint64LE?: {};
                    writeUIntLE?: {};
                    writeUintLE?: {};
                    writeUIntBE?: {};
                    writeUintBE?: {};
                    writeIntLE?: {};
                    writeIntBE?: {};
                    readBigUInt64BE?: {};
                    readBigUint64BE?: {};
                    readBigUInt64LE?: {};
                    readBigUint64LE?: {};
                    readBigInt64BE?: {};
                    readBigInt64LE?: {};
                    readUIntLE?: {};
                    readUintLE?: {};
                    readUIntBE?: {};
                    readUintBE?: {};
                    readIntLE?: {};
                    readIntBE?: {};
                    readUInt8?: {};
                    readUint8?: {};
                    readUInt16LE?: {};
                    readUint16LE?: {};
                    readUInt16BE?: {};
                    readUint16BE?: {};
                    readUInt32LE?: {};
                    readUint32LE?: {};
                    readUInt32BE?: {};
                    readUint32BE?: {};
                    readInt8?: {};
                    readInt16LE?: {};
                    readInt16BE?: {};
                    readInt32LE?: {};
                    readInt32BE?: {};
                    readFloatLE?: {};
                    readFloatBE?: {};
                    readDoubleLE?: {};
                    readDoubleBE?: {};
                    swap16?: {};
                    swap32?: {};
                    swap64?: {};
                    writeUInt8?: {};
                    writeUint8?: {};
                    writeUInt16LE?: {};
                    writeUint16LE?: {};
                    writeUInt16BE?: {};
                    writeUint16BE?: {};
                    writeUInt32LE?: {};
                    writeUint32LE?: {};
                    writeUInt32BE?: {};
                    writeUint32BE?: {};
                    writeInt8?: {};
                    writeInt16LE?: {};
                    writeInt16BE?: {};
                    writeInt32LE?: {};
                    writeInt32BE?: {};
                    writeFloatLE?: {};
                    writeFloatBE?: {};
                    writeDoubleLE?: {};
                    writeDoubleBE?: {};
                };
                toJSON?: {};
                equals?: {};
                _bsontype?: mongoose.Types.ObjectId;
                inspect?: {};
                _id?: any;
                toHexString?: {};
                generationTime?: unknown;
                getTimestamp?: {};
            };
            cacheHexString?: unknown;
            generate?: {};
            createFromTime?: {};
            createFromHexString?: {};
            isValid?: {};
        };
        ref?: unknown;
    }[];
    user_id: {
        prototype?: {
            toString: {};
            id?: {
                [x: number]: unknown;
                [Symbol.toStringTag]?: unknown;
                [Symbol.iterator]?: {};
                length?: unknown;
                toString: {};
                indexOf?: {};
                lastIndexOf?: {};
                slice?: {};
                valueOf: {};
                includes?: {};
                at?: {};
                toLocaleString: {};
                join?: {};
                every?: {};
                some?: {};
                forEach?: {};
                map?: {};
                filter?: {};
                reduce?: {};
                reduceRight?: {};
                find?: {};
                findIndex?: {};
                entries?: {};
                keys?: {};
                values?: {};
                reverse?: {};
                sort?: {};
                fill?: {};
                copyWithin?: {};
                BYTES_PER_ELEMENT?: unknown;
                buffer?: {
                    [Symbol.toStringTag]?: unknown;
                    slice?: {};
                    byteLength?: unknown;
                } | {
                    [Symbol.toStringTag]?: unknown;
                    slice?: {};
                    [Symbol.species]?: any;
                    byteLength?: unknown;
                };
                byteLength?: unknown;
                byteOffset?: unknown;
                set?: {};
                subarray?: {};
                copy?: {};
                write?: {};
                toJSON?: {};
                equals?: {};
                compare?: {};
                writeBigInt64BE?: {};
                writeBigInt64LE?: {};
                writeBigUInt64BE?: {};
                writeBigUint64BE?: {};
                writeBigUInt64LE?: {};
                writeBigUint64LE?: {};
                writeUIntLE?: {};
                writeUintLE?: {};
                writeUIntBE?: {};
                writeUintBE?: {};
                writeIntLE?: {};
                writeIntBE?: {};
                readBigUInt64BE?: {};
                readBigUint64BE?: {};
                readBigUInt64LE?: {};
                readBigUint64LE?: {};
                readBigInt64BE?: {};
                readBigInt64LE?: {};
                readUIntLE?: {};
                readUintLE?: {};
                readUIntBE?: {};
                readUintBE?: {};
                readIntLE?: {};
                readIntBE?: {};
                readUInt8?: {};
                readUint8?: {};
                readUInt16LE?: {};
                readUint16LE?: {};
                readUInt16BE?: {};
                readUint16BE?: {};
                readUInt32LE?: {};
                readUint32LE?: {};
                readUInt32BE?: {};
                readUint32BE?: {};
                readInt8?: {};
                readInt16LE?: {};
                readInt16BE?: {};
                readInt32LE?: {};
                readInt32BE?: {};
                readFloatLE?: {};
                readFloatBE?: {};
                readDoubleLE?: {};
                readDoubleBE?: {};
                swap16?: {};
                swap32?: {};
                swap64?: {};
                writeUInt8?: {};
                writeUint8?: {};
                writeUInt16LE?: {};
                writeUint16LE?: {};
                writeUInt16BE?: {};
                writeUint16BE?: {};
                writeUInt32LE?: {};
                writeUint32LE?: {};
                writeUInt32BE?: {};
                writeUint32BE?: {};
                writeInt8?: {};
                writeInt16LE?: {};
                writeInt16BE?: {};
                writeInt32LE?: {};
                writeInt32BE?: {};
                writeFloatLE?: {};
                writeFloatBE?: {};
                writeDoubleLE?: {};
                writeDoubleBE?: {};
            };
            toJSON?: {};
            equals?: {};
            _bsontype?: mongoose.Types.ObjectId;
            inspect?: {};
            _id?: any;
            toHexString?: {};
            generationTime?: unknown;
            getTimestamp?: {};
        };
        cacheHexString?: unknown;
        generate?: {};
        createFromTime?: {};
        createFromHexString?: {};
        isValid?: {};
    };
}, {}, {}, {}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, "type", {
    content: string;
    created_at: Date;
    updated_at: Date;
    comments: {
        type?: {
            prototype?: {
                toString: {};
                id?: {
                    [x: number]: unknown;
                    [Symbol.toStringTag]?: unknown;
                    [Symbol.iterator]?: {};
                    length?: unknown;
                    toString: {};
                    indexOf?: {};
                    lastIndexOf?: {};
                    slice?: {};
                    valueOf: {};
                    includes?: {};
                    at?: {};
                    toLocaleString: {};
                    join?: {};
                    every?: {};
                    some?: {};
                    forEach?: {};
                    map?: {};
                    filter?: {};
                    reduce?: {};
                    reduceRight?: {};
                    find?: {};
                    findIndex?: {};
                    entries?: {};
                    keys?: {};
                    values?: {};
                    reverse?: {};
                    sort?: {};
                    fill?: {};
                    copyWithin?: {};
                    BYTES_PER_ELEMENT?: unknown;
                    buffer?: {
                        [Symbol.toStringTag]?: unknown;
                        slice?: {};
                        byteLength?: unknown;
                    } | {
                        [Symbol.toStringTag]?: unknown;
                        slice?: {};
                        [Symbol.species]?: any;
                        byteLength?: unknown;
                    };
                    byteLength?: unknown;
                    byteOffset?: unknown;
                    set?: {};
                    subarray?: {};
                    copy?: {};
                    write?: {};
                    toJSON?: {};
                    equals?: {};
                    compare?: {};
                    writeBigInt64BE?: {};
                    writeBigInt64LE?: {};
                    writeBigUInt64BE?: {};
                    writeBigUint64BE?: {};
                    writeBigUInt64LE?: {};
                    writeBigUint64LE?: {};
                    writeUIntLE?: {};
                    writeUintLE?: {};
                    writeUIntBE?: {};
                    writeUintBE?: {};
                    writeIntLE?: {};
                    writeIntBE?: {};
                    readBigUInt64BE?: {};
                    readBigUint64BE?: {};
                    readBigUInt64LE?: {};
                    readBigUint64LE?: {};
                    readBigInt64BE?: {};
                    readBigInt64LE?: {};
                    readUIntLE?: {};
                    readUintLE?: {};
                    readUIntBE?: {};
                    readUintBE?: {};
                    readIntLE?: {};
                    readIntBE?: {};
                    readUInt8?: {};
                    readUint8?: {};
                    readUInt16LE?: {};
                    readUint16LE?: {};
                    readUInt16BE?: {};
                    readUint16BE?: {};
                    readUInt32LE?: {};
                    readUint32LE?: {};
                    readUInt32BE?: {};
                    readUint32BE?: {};
                    readInt8?: {};
                    readInt16LE?: {};
                    readInt16BE?: {};
                    readInt32LE?: {};
                    readInt32BE?: {};
                    readFloatLE?: {};
                    readFloatBE?: {};
                    readDoubleLE?: {};
                    readDoubleBE?: {};
                    swap16?: {};
                    swap32?: {};
                    swap64?: {};
                    writeUInt8?: {};
                    writeUint8?: {};
                    writeUInt16LE?: {};
                    writeUint16LE?: {};
                    writeUInt16BE?: {};
                    writeUint16BE?: {};
                    writeUInt32LE?: {};
                    writeUint32LE?: {};
                    writeUInt32BE?: {};
                    writeUint32BE?: {};
                    writeInt8?: {};
                    writeInt16LE?: {};
                    writeInt16BE?: {};
                    writeInt32LE?: {};
                    writeInt32BE?: {};
                    writeFloatLE?: {};
                    writeFloatBE?: {};
                    writeDoubleLE?: {};
                    writeDoubleBE?: {};
                };
                toJSON?: {};
                equals?: {};
                _bsontype?: mongoose.Types.ObjectId;
                inspect?: {};
                _id?: any;
                toHexString?: {};
                generationTime?: unknown;
                getTimestamp?: {};
            };
            cacheHexString?: unknown;
            generate?: {};
            createFromTime?: {};
            createFromHexString?: {};
            isValid?: {};
        };
        ref?: unknown;
    }[];
    user_id: {
        prototype?: {
            toString: {};
            id?: {
                [x: number]: unknown;
                [Symbol.toStringTag]?: unknown;
                [Symbol.iterator]?: {};
                length?: unknown;
                toString: {};
                indexOf?: {};
                lastIndexOf?: {};
                slice?: {};
                valueOf: {};
                includes?: {};
                at?: {};
                toLocaleString: {};
                join?: {};
                every?: {};
                some?: {};
                forEach?: {};
                map?: {};
                filter?: {};
                reduce?: {};
                reduceRight?: {};
                find?: {};
                findIndex?: {};
                entries?: {};
                keys?: {};
                values?: {};
                reverse?: {};
                sort?: {};
                fill?: {};
                copyWithin?: {};
                BYTES_PER_ELEMENT?: unknown;
                buffer?: {
                    [Symbol.toStringTag]?: unknown;
                    slice?: {};
                    byteLength?: unknown;
                } | {
                    [Symbol.toStringTag]?: unknown;
                    slice?: {};
                    [Symbol.species]?: any;
                    byteLength?: unknown;
                };
                byteLength?: unknown;
                byteOffset?: unknown;
                set?: {};
                subarray?: {};
                copy?: {};
                write?: {};
                toJSON?: {};
                equals?: {};
                compare?: {};
                writeBigInt64BE?: {};
                writeBigInt64LE?: {};
                writeBigUInt64BE?: {};
                writeBigUint64BE?: {};
                writeBigUInt64LE?: {};
                writeBigUint64LE?: {};
                writeUIntLE?: {};
                writeUintLE?: {};
                writeUIntBE?: {};
                writeUintBE?: {};
                writeIntLE?: {};
                writeIntBE?: {};
                readBigUInt64BE?: {};
                readBigUint64BE?: {};
                readBigUInt64LE?: {};
                readBigUint64LE?: {};
                readBigInt64BE?: {};
                readBigInt64LE?: {};
                readUIntLE?: {};
                readUintLE?: {};
                readUIntBE?: {};
                readUintBE?: {};
                readIntLE?: {};
                readIntBE?: {};
                readUInt8?: {};
                readUint8?: {};
                readUInt16LE?: {};
                readUint16LE?: {};
                readUInt16BE?: {};
                readUint16BE?: {};
                readUInt32LE?: {};
                readUint32LE?: {};
                readUInt32BE?: {};
                readUint32BE?: {};
                readInt8?: {};
                readInt16LE?: {};
                readInt16BE?: {};
                readInt32LE?: {};
                readInt32BE?: {};
                readFloatLE?: {};
                readFloatBE?: {};
                readDoubleLE?: {};
                readDoubleBE?: {};
                swap16?: {};
                swap32?: {};
                swap64?: {};
                writeUInt8?: {};
                writeUint8?: {};
                writeUInt16LE?: {};
                writeUint16LE?: {};
                writeUInt16BE?: {};
                writeUint16BE?: {};
                writeUInt32LE?: {};
                writeUint32LE?: {};
                writeUInt32BE?: {};
                writeUint32BE?: {};
                writeInt8?: {};
                writeInt16LE?: {};
                writeInt16BE?: {};
                writeInt32LE?: {};
                writeInt32BE?: {};
                writeFloatLE?: {};
                writeFloatBE?: {};
                writeDoubleLE?: {};
                writeDoubleBE?: {};
            };
            toJSON?: {};
            equals?: {};
            _bsontype?: mongoose.Types.ObjectId;
            inspect?: {};
            _id?: any;
            toHexString?: {};
            generationTime?: unknown;
            getTimestamp?: {};
        };
        cacheHexString?: unknown;
        generate?: {};
        createFromTime?: {};
        createFromHexString?: {};
        isValid?: {};
    };
}>>;
export default _default;
