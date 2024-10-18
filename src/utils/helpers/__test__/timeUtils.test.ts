import { convertTimeStamp } from '../timeUtils';

describe('convertTimeStamp', () => {
    it('should convert timestamp to date string', () => {
        const timestamp = 1613752800; // February 19, 2021 (in seconds)

        const result = convertTimeStamp(timestamp);

        expect(result).toBe('19/2/2021');
    });

    it('should handle invalid timestamp', () => {
        const timestamp = -1; // Invalid timestamp

        // Act
        const result = convertTimeStamp(timestamp);

        // Assert
        expect(result).toBe('NaN/NaN/NaN');
    });
});
